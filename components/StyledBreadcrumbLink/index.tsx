import { pageStyles } from "@/styles/styles.config";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledBreadcrumblink: React.FC<{ children?: React.ReactNode, href: string }> = ({ children, href }) => {
    return (
        <StyledLink href={href}>{children}</StyledLink>
    );
}

const StyledLink = styled(Link)`
    color: ${pageStyles.textColor};

    &:hover {
        color: ${pageStyles.activeColor};

        span {
            color: ${pageStyles.activeColor};
        }
    }
    `

export default StyledBreadcrumblink;