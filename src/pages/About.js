import React, { useCallback, useContext, useRef } from "react";
import { Container } from "semantic-ui-react";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

// 3D tilt + shine card
const TiltCard = ({ children }) => {
  const cardRef = useRef(null);
  const shineRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 180, damping: 22 });
  const springY = useSpring(rawY, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [9, -9]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-9, 9]);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(nx);
    rawY.set(ny);
    if (shineRef.current) {
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      shineRef.current.style.opacity = "1";
      shineRef.current.style.background = `radial-gradient(100px circle at ${px}% ${py}%, rgba(255,255,255,0.55), transparent 70%)`;
    }
  }, [rawX, rawY]);

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    if (shineRef.current) {
      shineRef.current.style.opacity = "0";
    }
  }, [rawX, rawY]);

  return (
    <TiltWrapper
      ref={cardRef}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <ShineLayer ref={shineRef} />
    </TiltWrapper>
  );
};

const TiltWrapper = styled(motion.div)`
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
`;

const ShineLayer = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  pointer-events: none;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const TECH_STACK = [
  { label: "React.js", color: "#61dafb" },
  { label: "Next.js", color: "#000000" },
  { label: "Angular", color: "#dd0031" },
  { label: "Node.js", color: "#339933" },
  { label: "Salesforce / LWC", color: "#00a1e0" },
  { label: "TypeScript", color: "#3178c6" },
  { label: "JavaScript", color: "#f7df1e" },
  { label: "MongoDB", color: "#47a248" },
  { label: "Express.js", color: "#888888" },
  { label: "AWS", color: "#ff9900" },
];

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.about || translations["en"].about;

  return (
    <MainContainer $language={language}>
      <Container text>
        <motion.div
          key={`about-${language}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <TitleWrapper>
              <AccentLine />
              <SectionTitle>{t.title}</SectionTitle>
              <AccentLine />
            </TitleWrapper>
          </motion.div>

          <AboutText>
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SubHeading>{t.summary.title}</SubHeading>
              <SummaryText>{t.summary.content}</SummaryText>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <SubHeading>{t.expertise.title}</SubHeading>
              <ExpertiseGrid>
                {t.expertise.areas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: 0.05 * index }}
                  >
                    <TiltCard>
                      <ExpertiseCard>
                        <ExpertiseCardAccent />
                        <h3>{area.title}</h3>
                        <p>{area.description}</p>
                      </ExpertiseCard>
                    </TiltCard>
                  </motion.div>
                ))}
              </ExpertiseGrid>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SubHeading>{language === "he" ? "טכנולוגיות" : "Tech Stack"}</SubHeading>
              <TechGrid>
                {TECH_STACK.map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-20px" }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <TechBadge $color={tech.color}>{tech.label}</TechBadge>
                  </motion.div>
                ))}
              </TechGrid>
            </motion.section>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <CTASection>
                <CTATitle>{t.cta.title}</CTATitle>
                <CTAButton to="contact" smooth={true} duration={500} offset={-70}>
                  {t.cta.buttonText}
                </CTAButton>
              </CTASection>
            </motion.div>
          </AboutText>
        </motion.div>
      </Container>
    </MainContainer>
  );
};

export default About;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(160deg, #f0f4ff 0%, #e8eeff 55%, #ede8ff 100%);
  direction: ${(props) => (props.$language === "he" ? "rtl" : "ltr")};
  text-align: ${(props) => (props.$language === "he" ? "right" : "left")};

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  justify-content: center;
`;

const AccentLine = styled.div`
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0077ff, transparent);
  max-width: 120px;
`;

const SectionTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: #111;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 2.5rem;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0077ff;
  margin-bottom: 1.2rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    inset-inline-start: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #0077ff, #8800ff);
    border-radius: 2px;
  }
`;

const SummaryText = styled.p`
  white-space: pre-line;
  color: #555;
  line-height: 1.8;
  margin-bottom: 2.5rem;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  margin: 1.5rem 0 2.5rem;
`;

const ExpertiseCard = styled.div`
  padding: 1.5rem;
  background: #f8f9ff;
  border-radius: 12px;
  border: 1px solid #e8eeff;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: #0077ff;
    box-shadow: 0 8px 30px rgba(0, 119, 255, 0.1);
  }

  h3 {
    margin-bottom: 0.7rem;
    color: #222;
    font-size: 1rem;
    font-weight: 700;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }
`;

const ExpertiseCardAccent = styled.div`
  position: absolute;
  top: 0;
  inset-inline-start: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #0077ff, #8800ff);
  border-radius: 4px 0 0 4px;
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 1.2rem 0 2.5rem;
`;

const TechBadge = styled.div`
  padding: 0.45rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${(p) => p.$color};
  background: ${(p) => p.$color}18;
  border: 1px solid ${(p) => p.$color}44;
  cursor: default;
  transition: all 0.2s ease;

  &:hover {
    background: ${(p) => p.$color}28;
    border-color: ${(p) => p.$color};
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin: 1rem 0 2rem;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #f0f4ff, #f5f0ff);
  border-radius: 16px;
  border: 1px solid #e0e7ff;
`;

const CTATitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1.5rem;
`;

const CTAButton = styled(ScrollLink)`
  display: inline-block;
  padding: 0.9rem 2.5rem;
  background: linear-gradient(135deg, #0077ff, #8800ff);
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 119, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 119, 255, 0.5);
    color: white;
  }
`;
