import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Image } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const PHASES = { TYPING: "typing", PAUSING: "pausing", DELETING: "deleting" };

const useCyclingTypeWriter = (roles, typeSpeed = 65, deleteSpeed = 35, pauseMs = 2000) => {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState(PHASES.TYPING);

  useEffect(() => {
    setDisplayed("");
    setRoleIndex(0);
    setPhase(PHASES.TYPING);
  }, [roles]);

  useEffect(() => {
    const current = roles[roleIndex] ?? "";

    if (phase === PHASES.TYPING) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typeSpeed
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase(PHASES.DELETING), pauseMs);
      return () => clearTimeout(t);
    }

    if (phase === PHASES.DELETING) {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed((prev) => prev.slice(0, -1)),
          deleteSpeed
        );
        return () => clearTimeout(t);
      }
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setPhase(PHASES.TYPING);
    }
  }, [displayed, phase, roleIndex, roles, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
};

const REACTIONS = [
  {
    frames: ["annoyed_1.png", "annoyed_2.png", "annoyed_3.png"],
    text: "תפסיק ללחוץ עליי! 😤",
    textEn: "Stop clicking me! 😤",
    frameRate: 200,
  },
  {
    frames: ["coding_1.png", "coding_2.png", "coding_3.png"],
    text: "רגע, אני בקוד...",
    textEn: "Hold on, I'm coding... 💻",
    frameRate: 220,
  },
  {
    frames: ["surprised_1.png", "surprised_2.png", "surprised_3.png"],
    text: "וואו! 😮",
    textEn: "Whoa! 😮",
    frameRate: 280,
  },
  {
    frames: ["proud_1.png", "proud_2.png"],
    text: "תראה מה בניתי! 💪",
    textEn: "Check out what I built! 💪",
    frameRate: 250,
  },
];

const PARTICLE_CONFIG = [
  { size: 6, top: "15%", left: "8%", duration: 8, delay: 0 },
  { size: 4, top: "70%", left: "5%", duration: 10, delay: 1 },
  { size: 8, top: "30%", left: "92%", duration: 7, delay: 2 },
  { size: 5, top: "80%", left: "88%", duration: 9, delay: 0.5 },
  { size: 3, top: "50%", left: "15%", duration: 11, delay: 3 },
  { size: 7, top: "20%", left: "75%", duration: 6, delay: 1.5 },
  { size: 4, top: "60%", left: "60%", duration: 12, delay: 4 },
  { size: 5, top: "10%", left: "45%", duration: 8, delay: 2.5 },
  { size: 3, top: "90%", left: "35%", duration: 10, delay: 1 },
  { size: 6, top: "40%", left: "95%", duration: 9, delay: 3.5 },
];

const Home = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.home || translations["en"].home;
  const isRTL = language === "he";
  const roles = t.roles || [t.role];
  const displayed = useCyclingTypeWriter(roles);

  const [activeFrame, setActiveFrame] = useState(null);
  const [speechText, setSpeechText] = useState("");
  const animRef = useRef(null);

  const handleImageClick = useCallback(() => {
    if (animRef.current) return;
    const reaction = REACTIONS[Math.floor(Math.random() * REACTIONS.length)];
    setSpeechText(isRTL ? reaction.text : reaction.textEn);
    let i = 0;
    animRef.current = setInterval(() => {
      if (i < reaction.frames.length) {
        setActiveFrame(`${process.env.PUBLIC_URL}/${reaction.frames[i]}`);
        i++;
      } else {
        clearInterval(animRef.current);
        animRef.current = null;
        setTimeout(() => {
          setActiveFrame(null);
          setSpeechText("");
        }, 700);
      }
    }, reaction.frameRate);
  }, [isRTL]);

  const spotlightRef = useRef(null);
  const handleMouseMove = useCallback((e) => {
    if (!spotlightRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(550px circle at ${x}px ${y}px, rgba(0,119,255,0.09) 0%, rgba(136,0,255,0.05) 40%, transparent 70%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!spotlightRef.current) return;
    spotlightRef.current.style.background = "none";
  }, []);

  return (
    <MainContainer dir={isRTL ? "rtl" : "ltr"} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <SpotlightOverlay ref={spotlightRef} />
      <ParticlesLayer>
        {PARTICLE_CONFIG.map((p, i) => (
          <Particle key={i} $size={p.size} $top={p.top} $left={p.left} $duration={p.duration} $delay={p.delay} />
        ))}
      </ParticlesLayer>

      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          key={`home-text-${language}`}
          style={{ flex: 1 }}
        >
          <TextSection>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Greeting>{t.greeting}</Greeting>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Name>{t.name}</Name>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <RoleWrapper>
                <Role>
                  {displayed}
                  <Cursor />
                </Role>
              </RoleWrapper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <CTAButtons $isRTL={isRTL}>
                <PrimaryButton to="contact" smooth={true} duration={600} offset={-70}>
                  {language === "he" ? "בואו נדבר" : "Let's Talk"}
                </PrimaryButton>
                <SecondaryButton to="projects" smooth={true} duration={600} offset={-70}>
                  {language === "he" ? "הפרויקטים שלי" : "My Work"}
                </SecondaryButton>
              </CTAButtons>
            </motion.div>
          </TextSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          style={{ flex: 1 }}
        >
          <ImageSection>
            <ImageRing
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <ImageGlow />
            <ImageWrapper onClick={handleImageClick} $isAnimating={!!activeFrame}>
              <CircularImage
                src={activeFrame || `${process.env.PUBLIC_URL}/profile3.png`}
                size="medium"
                circular
              />
            </ImageWrapper>
            {speechText && (
              <SpeechBubble
                as={motion.div}
                initial={{ opacity: 0, y: -10, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                $isRTL={isRTL}
              >
                {speechText}
              </SpeechBubble>
            )}
          </ImageSection>
        </motion.div>
      </ContentWrapper>

      <ScrollIndicator
        to="about"
        smooth={true}
        duration={600}
        offset={-70}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowIcon>↓</ArrowIcon>
        </motion.div>
      </ScrollIndicator>
    </MainContainer>
  );
};

const SpotlightOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  border-radius: inherit;
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
  50% { transform: translateY(-20px) scale(1.1); opacity: 0.6; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const MainContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem 5rem;
  background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 40%, #f5f0ff 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: calc(100vh - 90px);
    padding-bottom: 5rem;
  }
`;

const ParticlesLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

const Particle = styled.div`
  position: absolute;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  top: ${(p) => p.$top};
  left: ${(p) => p.$left};
  border-radius: 50%;
  background: radial-gradient(circle, #0077ff, #8800ff);
  animation: ${float} ${(p) => p.$duration}s ease-in-out ${(p) => p.$delay}s infinite;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextSection = styled.div`
  max-width: 600px;
  padding: 0 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
`;

const Greeting = styled.p`
  font-size: 1.6rem;
  color: #0077ff;
  font-weight: 600;
  margin-bottom: 0.3rem;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Name = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
  background: linear-gradient(120deg, #0033cc, #0077ff, #8800ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const RoleWrapper = styled.div`
  min-height: 3.5rem;
  display: flex;
  align-items: center;
`;

const Role = styled.p`
  font-size: 2rem;
  color: #444;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.8rem;
  background: #0077ff;
  margin-left: 3px;
  vertical-align: middle;
  animation: ${blink} 0.8s step-end infinite;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-direction: ${(p) => (p.$isRTL ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled(ScrollLink)`
  display: inline-block;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #0077ff, #8800ff);
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 119, 255, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 119, 255, 0.5);
    color: white;
  }
`;

const SecondaryButton = styled(ScrollLink)`
  display: inline-block;
  padding: 0.9rem 2rem;
  background: transparent;
  color: #0077ff;
  border: 2px solid #0077ff;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 119, 255, 0.08);
    transform: translateY(-2px);
    color: #0077ff;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ImageRing = styled(motion.div)`
  position: absolute;
  width: 38em;
  height: 38em;
  border-radius: 50%;
  border: 2px dashed rgba(0, 119, 255, 0.25);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 22em;
    height: 22em;
  }
`;

const ImageGlow = styled.div`
  position: absolute;
  width: 32em;
  height: 32em;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 119, 255, 0.12) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;

  @media (max-width: 768px) {
    width: 20em;
    height: 20em;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.96);
  }

  ${(p) =>
    p.$isAnimating &&
    `
    filter: drop-shadow(0 0 18px rgba(136, 0, 255, 0.45));
  `}
`;

const SpeechBubble = styled.div`
  position: absolute;
  top: -3.2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  color: #222;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 18px;
  white-space: nowrap;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  border: 1.5px solid rgba(0, 119, 255, 0.18);
  z-index: 10;
  direction: ${(p) => (p.$isRTL ? "rtl" : "ltr")};
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -9px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 9px 7px 0 7px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));
  }
`;

const CircularImage = styled(Image)`
  position: relative;
  z-index: 1;
  width: 30em !important;
  height: 30em !important;
  object-fit: cover;
  box-shadow: 0 20px 60px rgba(0, 119, 255, 0.2);
  transition: opacity 0.08s ease;

  @media (max-width: 768px) {
    width: 18em !important;
    height: 18em !important;
  }
`;

const ScrollIndicator = styled(ScrollLink)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  cursor: pointer;
  text-decoration: none;
`;

const ArrowIcon = styled.span`
  display: block;
  font-size: 1.5rem;
  color: #0077ff;
  opacity: 0.7;
  padding: 0.5rem;
  border: 2px solid rgba(0, 119, 255, 0.3);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    border-color: #0077ff;
    background: rgba(0, 119, 255, 0.08);
  }
`;

export default Home;
