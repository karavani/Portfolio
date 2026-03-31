import React, { useRef, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

const CARD_WIDTH = 380;
const CARD_GAP = 40;

const CardContent = ({ milestone, index, isRTL }) => (
  <CardInner>
    <CardTop>
      <YearBadge>{milestone.year}</YearBadge>
      <IconCircle>{milestone.icon}</IconCircle>
    </CardTop>
    <CardBody $isRTL={isRTL}>
      <MilestoneTitle>{milestone.title}</MilestoneTitle>
      <MilestoneDesc>{milestone.description}</MilestoneDesc>
    </CardBody>
    <CardIndex>{String(index + 1).padStart(2, "0")}</CardIndex>
  </CardInner>
);

const Timeline = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.timeline || translations["en"].timeline;
  const isRTL = language === "he";
  const milestones = t.milestones;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalScrollX = (milestones.length - 1) * (CARD_WIDTH + CARD_GAP);
  const xLTR = useTransform(scrollYProgress, [0, 1], [0, -totalScrollX]);
  const xRTL = useTransform(scrollYProgress, [0, 1], [0, totalScrollX]);
  const x = isRTL ? xRTL : xLTR;

  const sectionHeight = `calc(100vh + ${totalScrollX}px)`;

  const header = (
    <HeaderArea
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <SectionTitle>{t.title}</SectionTitle>
      <SectionSubtitle>{t.subtitle}</SectionSubtitle>
    </HeaderArea>
  );

  return (
    <Wrapper dir={isRTL ? "rtl" : "ltr"}>
      {/* ── Desktop: sticky + framer-motion horizontal transform ── */}
      <DesktopSection ref={sectionRef} style={{ height: sectionHeight }}>
        <StickyContainer>
          {header}
          <TrackWrapper>
            <Track style={{ x }} $isRTL={isRTL}>
              {milestones.map((milestone, index) => (
                <DesktopCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <CardContent milestone={milestone} index={index} isRTL={isRTL} />
                </DesktopCard>
              ))}
            </Track>
          </TrackWrapper>
          <ScrollHint
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HintArrows>← →</HintArrows>
            <HintText>
              {language === "he"
                ? "גלול למטה לחשיפת כל אבני הדרך"
                : "Scroll down to reveal the journey"}
            </HintText>
          </ScrollHint>
        </StickyContainer>
      </DesktopSection>

      {/* ── Mobile: native horizontal swipe with snap ── */}
      <MobileSection>
        {header}
        <SwipeHint
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <SwipeArrow>→</SwipeArrow>
          <SwipeText>
            {language === "he" ? "החלק לגילוי הסיפור" : "Swipe to explore"}
          </SwipeText>
        </SwipeHint>
        <SnapTrack $isRTL={isRTL}>
          {milestones.map((milestone, index) => (
            <SnapCard
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45 }}
            >
              <CardContent milestone={milestone} index={index} isRTL={isRTL} />
            </SnapCard>
          ))}
          <SnapEndSpacer />
        </SnapTrack>
        <DotNav>
          {milestones.map((_, i) => (
            <Dot key={i} />
          ))}
        </DotNav>
      </MobileSection>
    </Wrapper>
  );
};

/* ─── Shared styles ─── */

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const Wrapper = styled.div`
  background: linear-gradient(160deg, #060b1a 0%, #0d1433 50%, #0a0a1f 100%);
`;

const HeaderArea = styled(motion.div)`
  text-align: center;
  padding: 0 2rem;
  margin-bottom: 2.5rem;
  flex-shrink: 0;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(120deg, #ffffff, #7eb3ff, #bb86fc, #ffffff);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem;
  animation: ${gradientShift} 5s ease infinite;
`;

const SectionSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  margin: 0;
`;

const CardInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const YearBadge = styled.span`
  background: linear-gradient(135deg, #0077ff, #8800ff);
  color: white;
  padding: 0.3rem 0.9rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

const IconCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
`;

const CardBody = styled.div`
  text-align: ${(p) => (p.$isRTL ? "right" : "left")};
  flex: 1;
`;

const MilestoneTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.8rem;
`;

const MilestoneDesc = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
`;

const CardIndex = styled.span`
  display: block;
  margin-top: 1.5rem;
  font-size: 3.5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.05);
  line-height: 1;
  user-select: none;
  pointer-events: none;
  text-align: right;
`;

const sharedCardStyle = `
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  cursor: default;
  backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(0, 119, 255, 0.5);
    box-shadow: 0 0 40px rgba(0, 119, 255, 0.15);
  }
`;

/* ─── Desktop-only ─── */

const DesktopSection = styled.section`
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
`;

const TrackWrapper = styled.div`
  overflow: visible;
  padding: 1rem 0 1rem 4rem;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Track = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: ${CARD_GAP}px;
  align-items: stretch;
  will-change: transform;
  direction: ${(p) => (p.$isRTL ? "rtl" : "ltr")};
`;

const DesktopCard = styled(motion.div)`
  flex-shrink: 0;
  width: ${CARD_WIDTH}px;
  ${sharedCardStyle}
`;

const ScrollHint = styled(motion.div)`
  text-align: center;
  padding: 0.5rem;
  flex-shrink: 0;
`;

const HintArrows = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.5em;
`;

const HintText = styled.p`
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
  margin: 0.3rem 0 0;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

/* ─── Mobile-only ─── */

const MobileSection = styled.div`
  display: none;
  padding: 3rem 0 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SwipeHint = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
`;

const SwipeArrow = styled.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.45);
`;

const SwipeText = styled.span`
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const SnapTrack = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.$isRTL ? "row-reverse" : "row")};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 1rem;
  padding: 0.5rem 1.5rem 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const SnapCard = styled(motion.div)`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 82vw;
  max-width: 340px;
  ${sharedCardStyle}
`;

const SnapEndSpacer = styled.div`
  flex-shrink: 0;
  width: 0.5rem;
`;

const DotNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0 0;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
`;

export default Timeline;
