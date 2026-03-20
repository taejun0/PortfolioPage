---
title: "백준 2307 도로검문"
date: "2025-03-20"
description: "백준 2307 도로검문 - JAVA, Dijkstra 응용 문제"
tags:
  - "코딩테스트"
series: "코딩테스트"
thumbnail: "https://velog.velcdn.com/images/taejun0/post/c3e72141-761a-426e-bc6f-ecb9b6dc4475/image.png"
isVelogPost: false
---

# 서론

![도로 검문 문제 시도](https://velog.velcdn.com/images/taejun0/post/c3e72141-761a-426e-bc6f-ecb9b6dc4475/image.png)

오늘은, 코딩테스트를 준비하며 백준 2307번 '도로검문' 문제에서 겪은 여러 시행착오에 대해 적어보고자 한다.

단순한 최단 거리를 구하기 위한 다익스트라(Dijkstr)가 아닌, 특정 간선을 조작하고 그 변화를 추적해야했다.

# 본론

## 문제 분석

![문제 사진](https://velog.velcdn.com/images/taejun0/post/641f7b3d-2767-49c4-9a1f-e3edc9c1c9ce/image.png)

문제의 길이 자체는 길지만, 생각보다 아이디어는 굉장히 단순했다.
가중치가 있는 무향그래프 내에서 최단 거리를 구해야하는데 각 간선을 제한할 경우 과연 최단거리가 어느정도까지 늘어날지를 구해야한다.

## 문제 풀이 과정

### 1차 시도

초기에는 아래의 알고리즘을 떠올렸다.

1. 다익스트라로 `start` ~ `end`의 원래 최단 거리를 구한다.
2. 각 간선을 하나씩 제외해 보면서 다시 다익스트라를 돌려 최단 거리를 구한다.
3. 간선을 제외했을 때의 거리와 1에서 구한 거리를 비교하여 최대 지연 시간을 갱신한다.

```java
public static class Node {
  int vertex;
  int weight;
  int index;

  public Node (int vertex, int weight, int index) {
    this.vertex = vertex;
    this.weight = weight;
    this.index = index;
  }
}
```

```java
visited = new boolean[M];

int answer = 0;
int runn = dijkstra(0, N-1);

for (int i=0; i<M; i++) {
  visited[i] = true;
  int makki = dijkstra(0, N-1);

  if (makki == Integer.MAX_VALUE) {
    answer = -1;
    break;
  }

  answer = Math.max(answer, makki-runn);
  visited[i] = false;
}
```

위의 두 코드는 내가 초기 문제 해결을 시도하며 작성한 핵심 코드이다.

간선(Node)마다 고유한 index 값을 부여하고, visited 배열과 매핑하여 간선을 하나씩 제외하는 방식을 택했다.

그러나, 메모리 초과를 피할 수 없었다.

### 2차 시도

이에 메모리를 줄일 방법을 몇 가지 떠올렸다.

```java
public static int dijkstra (int start, int target) {
  dist = new int[N];
  Arrays.fill(dist, Integer.MAX_VALUE);
  dist[start] = 0;

  PriorityQueue<Node> pq = new PriorityQueue<>((o1, o2) -> {
    return o1.weight - o2.weight;
  });
  pq.add(new Node(start, 0, -1));

  while (!pq.isEmpty()) {
    Node cur = pq.poll();

    if (cur.weight > dist[cur.vertex]) continue;

    for (int i = 0; i < list[cur.vertex].size(); i++) {
      Node Next = list[cur.vertex].get(i);

      if (visited[Next.index]) continue;

      if (dist[Next.vertex] > Next.weight + cur.weight) {
        dist[Next.vertex] = Next.weight + cur.weight;
        pq.add(new Node(Next.vertex, dist[Next.vertex], Next.index));
      }
    }
  }

  return dist[target];
}
```

가장 빠르게 볼 수 있는 메모리적 문제는 2가지였다.

1. dist 배열의 반복적인 초기화 (new int[N])
2. PriorityQueue 생성 시 사용되는 람다식

그러나, 이정도로는 메모리 누수의 근본적인 원인을 제할 수는 없었다.

### 3차 시도

문제를 몇 번 다시 읽어보니, 나는 굳이 확인하지 않아도 되는 간선들이 있음을 깨달았다.

최단 경로 상에 없는 도로는 경찰이 막는 막지 않든 도착 시간에 아무런 영향을 주지않는다는 것이다.

이에 새로운 아이디어를 적용하였다.
초기 다익스트라를 돌릴 때 도출된 '최단 경로' 상의 도로들만 하나씩 막아보았다.

이에 다익스트라에 '최단 경로 역추적' 기법을 적용하였다.

```java
// 경로를 기록할 배열 선언
static int[] parent;

// ... 다익스트라 내부 로직 ...
if (dist[Next.vertex] > Next.weight + cur.weight) {
    dist[Next.vertex] = Next.weight + cur.weight;

    // 최초 1회 실행(아무것도 막지 않았을 때)에만 경로를 기록한다.
    if (blockU == -1 && blockV == -1) {
        parent[Next.vertex] = cur.vertex;
    }

    pq.add(new Node(Next.vertex, dist[Next.vertex]));
}
```

parent[Next.vertex] = cur.vertex는 다음 정점위치에 현 위치를 저장한다.

즉, 이제는 목적지로부터 parent 배열을 뒤집어서 진단하면 되는 것이다.

```java
// 최종 제출물

import java.io.*;
import java.util.*;

public class Main {
  static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  static StringBuilder sb = new StringBuilder();
  static StringTokenizer st;

  static int N, M;
  static ArrayList <Node>[] list;
  static int[] dist;
  static int[] parent;

  public static class Node {
    int vertex;
    int weight;

    public Node (int vertex, int weight) {
      this.vertex = vertex;
      this.weight = weight;
    }
  }

  public static int dijkstra (int start, int target, int blockU, int blockV) {
    dist = new int[N];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[start] = 0;
    PriorityQueue <Node> pq = new PriorityQueue<>((o1, o2) -> {
      return o1.weight - o2.weight;
    });

    pq.add(new Node(start, 0));

    while (!pq.isEmpty()) {
      Node cur = pq.poll();

      if (cur.weight > dist[cur.vertex]) continue;

      for (int i=0; i<list[cur.vertex].size(); i++) {

        Node Next = list[cur.vertex].get(i);

        if ((cur.vertex == blockU && Next.vertex == blockV) ||
          (cur.vertex == blockV && Next.vertex == blockU)) {
          continue;
        }

        if (dist[Next.vertex] > Next.weight + cur.weight) {
          dist[Next.vertex] = Next.weight + cur.weight;

          if (blockU == -1 && blockV == -1) {
            parent[Next.vertex] = cur.vertex;
          }

          pq.add(new Node(Next.vertex, dist[Next.vertex]));
        }
      }
    }

    return dist[target];
  }

  public static void main (String[] args) throws IOException {
    st = new StringTokenizer(br.readLine());
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    list = new ArrayList[N];
    for (int i=0; i<N; i++) list[i] = new ArrayList<>();

    for (int i=0; i<M; i++) {
      st = new StringTokenizer(br.readLine());
      int a = Integer.parseInt(st.nextToken())-1;
      int b = Integer.parseInt(st.nextToken())-1;
      int t = Integer.parseInt(st.nextToken());

      list[a].add(new Node(b, t));
      list[b].add(new Node(a, t));
    }

    parent = new int[N];

    int answer = 0;
    int runn = dijkstra(0, N-1, -1, -1);

    int curr = N-1;
    while (curr != 0) {
      int p = parent[curr];
      int makki = dijkstra(0, N-1, p, curr);

      if (makki == Integer.MAX_VALUE) {
        answer = -1;
        break;
      }

      answer = Math.max(answer, makki-runn);
      curr = p;
    }

    sb.append(answer);
    System.out.println(sb);
    br.close();
  }
}
```

# 결론

이번 문제를 통해 다익스트라 알고리즘이 단순 '최단 거리'를 구하는 도구가 아님을 배웠다.
parent 배열을 곁들인 경로 역추적을 수행하면, 그 발자취 또한 완벽하게 파악할 수 있는 무기가 되었다.

초기 완전 탐색적인 접근이 시간 초과는 물론, 메모리 초과를 불러올 수 있음을 실감했다.

즉, 이 모든 것을 고려한 초기 설계의 중요성이 절실히 느껴졌다.
