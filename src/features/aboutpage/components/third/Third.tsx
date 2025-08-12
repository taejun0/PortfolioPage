import * as S from "./Third.styled";

import { THIRDCONSTANT } from "./ThirdConstant";

const Third = () => {
  return (
    <S.Wrapper>
      <S.Title>{THIRDCONSTANT.TEXT.TITLE}</S.Title>
      <S.SemiTitle>{THIRDCONSTANT.TEXT.SEMITITLE}</S.SemiTitle>
      <S.Containers>
        <S.Line />
        <S.ContainerWrap>
          <S.Container1>
            <S.Time>{THIRDCONSTANT.TEXT.CONTENT.ONE.TIME}</S.Time>
            <S.ContainerTitle>
              {THIRDCONSTANT.TEXT.CONTENT.ONE.TITLE}
            </S.ContainerTitle>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.ContainerText>
                  {THIRDCONSTANT.TEXT.CONTENT.ONE.CONTENT.TITLE}
                </S.ContainerText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.ONE.CONTENT.TEXT.map((i) => (
                <S.ContainerTextBox>
                  <S.ContainerText>{i}</S.ContainerText>
                  <div>·</div>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
          </S.Container1>
          <S.Container2></S.Container2>
        </S.ContainerWrap>
        <S.ContainerWrap>
          <S.Container1>
            <S.Keywords>
              {THIRDCONSTANT.TEXT.CONTENT.TWO.KEYWORD.map((i) => (
                <S.Keyword>{i}</S.Keyword>
              ))}
            </S.Keywords>
          </S.Container1>
          <S.Container2>
            <S.Time>{THIRDCONSTANT.TEXT.CONTENT.TWO.TIME}</S.Time>
            <S.ContainerTitle>
              {THIRDCONSTANT.TEXT.CONTENT.TWO.TITLE}
            </S.ContainerTitle>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.ContainerText>
                  {THIRDCONSTANT.TEXT.CONTENT.TWO.CONTENT1.TITLE}
                </S.ContainerText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.TWO.CONTENT1.TEXT.map((i) => (
                <S.ContainerTextBox>
                  <div>·</div>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>

            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.ContainerText>
                  {THIRDCONSTANT.TEXT.CONTENT.TWO.CONTENT2.TITLE}
                </S.ContainerText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.TWO.CONTENT2.TEXT.map((i) => (
                <S.ContainerTextBox>
                  <div>·</div>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
          </S.Container2>
        </S.ContainerWrap>
        <S.ContainerWrap>
          <S.Container1>
            <S.Time>{THIRDCONSTANT.TEXT.CONTENT.THREE.TIME}</S.Time>
            <S.ContainerTitle>
              {THIRDCONSTANT.TEXT.CONTENT.THREE.TITLE}
            </S.ContainerTitle>
            <S.ContainerTextBoxCOL>
              {THIRDCONSTANT.TEXT.CONTENT.THREE.CONTENT1.TEXT.map((i) => (
                <S.ContainerTextBox>
                  <S.ContainerText>{i}</S.ContainerText>
                  <div>·</div>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
          </S.Container1>
          <S.Container2></S.Container2>
        </S.ContainerWrap>
        <S.ContainerWrap>
          <S.Container1>
            <S.Keywords>
              {THIRDCONSTANT.TEXT.CONTENT.FOUR.KEYWORD.map((i) => (
                <S.Keyword>{i}</S.Keyword>
              ))}
            </S.Keywords>
          </S.Container1>
          <S.Container2>
            <S.Time>{THIRDCONSTANT.TEXT.CONTENT.FOUR.TIME}</S.Time>
            <S.ContainerTitle>
              {THIRDCONSTANT.TEXT.CONTENT.FOUR.TITLE}
            </S.ContainerTitle>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.ContainerText>
                  {THIRDCONSTANT.TEXT.CONTENT.FOUR.CONTENT1.TITLE}
                </S.ContainerText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.FOUR.CONTENT1.TEXT.map((i) => (
                <S.ContainerTextBox>
                  <div>·</div>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.ContainerText>
                  {THIRDCONSTANT.TEXT.CONTENT.FOUR.CONTENT2.TITLE}
                </S.ContainerText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.FOUR.CONTENT2.TEXT.map((i) => (
                <S.ContainerTextBox>
                  <div>·</div>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
          </S.Container2>
        </S.ContainerWrap>
        <S.ContainerWrap>
          <S.Container1>
            <S.Time>{THIRDCONSTANT.TEXT.CONTENT.FIVE.TIME}</S.Time>
            <S.ContainerTitle>
              {THIRDCONSTANT.TEXT.CONTENT.FIVE.TITLE}
            </S.ContainerTitle>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.ContainerText>
                  {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT1.TITLE}
                </S.ContainerText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT1.TEXT.map((i) => (
                <S.ContainerTextBox>
                  <S.ContainerText>{i}</S.ContainerText>
                  <div>·</div>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.ContainerText>
                  {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT2.TITLE}
                </S.ContainerText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT2.TEXT.map((i) => (
                <S.ContainerTextBox>
                  <S.ContainerText>{i}</S.ContainerText>
                  <div>·</div>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>{" "}
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.ContainerText>
                  {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT3.TITLE}
                </S.ContainerText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT3.TEXT.map((i) => (
                <S.ContainerTextBox>
                  <S.ContainerText>{i}</S.ContainerText>
                  <div>·</div>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
          </S.Container1>
          <S.Container2>
            <S.Keywords>
              {THIRDCONSTANT.TEXT.CONTENT.FIVE.KEYWORD.map((i) => (
                <S.Keyword>{i}</S.Keyword>
              ))}
            </S.Keywords>
          </S.Container2>
        </S.ContainerWrap>
      </S.Containers>
    </S.Wrapper>
  );
};

export default Third;
