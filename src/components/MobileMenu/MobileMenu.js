/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { COLORS, WEIGHTS } from "../../constants";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} aria-label={"Mobile styles"}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background: hsla(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: center;
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${COLORS.white};
  padding: 32px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Filler = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  font-size: 1.125rem;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};

  font-size: calc(14 / 16) rem;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

export default MobileMenu;
