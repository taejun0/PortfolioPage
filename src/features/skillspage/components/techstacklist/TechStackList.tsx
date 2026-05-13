"use client";

import * as S from "./TeckStackList.styled";

import {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import { motion, AnimatePresence } from "framer-motion";

import { SKILLS_FILTER_ALL, TECH_STACK_ITEMS } from "@constants";

interface Props {
  selectedCategory: string;
}

interface TechStack {
  name: string;
  icon: React.ReactNode;
  category: string;
  description: string;
  tags?: string[];
}

const TechStackItem = ({
  tech,
  isExpanded,
  toggleItem,
  index,
}: {
  tech: TechStack;
  isExpanded: boolean;
  toggleItem: (name: string) => void;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        // 3줄 높이 계산 (대략)
        const lineHeight = 1.75;
        const fontSize = 15; // 0.9375rem = 15px
        setHeight(fontSize * lineHeight * 3);
      }
    }
  }, [isExpanded]);

  const handleCardClick = useCallback(() => {
    if (cardRef.current) {
      // 이미 확장된 상태면 바로 토글만
      if (isExpanded) {
        toggleItem(tech.name);
        return;
      }

      // 카드를 화면 중앙으로 스크롤
      const rect = cardRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const centerY =
        rect.top + scrollTop - window.innerHeight / 2 + rect.height / 2;

      window.scrollTo({
        top: centerY,
        behavior: "smooth",
      });

      // 스크롤 완료 후 확장
      setTimeout(() => {
        toggleItem(tech.name);
      }, 300);
    }
  }, [tech.name, toggleItem, isExpanded]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        delay: index * 0.03,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        layout: { duration: 0.3, ease: "easeInOut" },
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <S.Item
        category={tech.category}
        onClick={handleCardClick}
        $isExpanded={isExpanded}
      >
        <S.TitleBox category={tech.category}>
          <div>
            {tech.icon}
          </div>
          <div>
            <S.Title>{tech.name}</S.Title>
            <S.CategoryBadge
              category={tech.category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.03 + 0.1, duration: 0.3 }}
            >
              {tech.category}
            </S.CategoryBadge>
          </div>
        </S.TitleBox>
        {tech.tags && tech.tags.length > 0 && (
          <S.TagContainer>
            {tech.tags.map((tag: string, tagIndex: number) => (
              <S.Tag
                key={tag}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.03 + tagIndex * 0.02 }}
              >
                {tag}
              </S.Tag>
            ))}
          </S.TagContainer>
        )}
        <AnimatePresence initial={false}>
          <motion.div
            animate={{ height }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div ref={contentRef}>
              <S.Text
                $expanded={isExpanded}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {tech.description}
              </S.Text>
            </div>
          </motion.div>
        </AnimatePresence>
      </S.Item>
    </motion.div>
  );
};

const TechStackList = ({ selectedCategory }: Props) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  // 필터 변경 시 expanded 상태 초기화
  useEffect(() => {
    setExpandedItems({});
  }, [selectedCategory]);

  const toggleItem = useCallback((name: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }, []);

  const filtered = useMemo(() => {
    return selectedCategory === SKILLS_FILTER_ALL
      ? TECH_STACK_ITEMS
      : TECH_STACK_ITEMS.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <S.Grid>
      <AnimatePresence mode="popLayout">
        {filtered.map((tech, index) => (
          <TechStackItem
            key={`${tech.name}-${selectedCategory}`}
            tech={tech}
            isExpanded={!!expandedItems[tech.name]}
            toggleItem={toggleItem}
            index={index}
          />
        ))}
      </AnimatePresence>
    </S.Grid>
  );
};

export default TechStackList;
