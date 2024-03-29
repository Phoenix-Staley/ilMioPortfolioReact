import React from "react";
import resume from "../assets/phoenixCurriculumVitae_2Octobre.pdf";

const styles = {
    staticHeader: {
        width: "100%",
        backgroundColor: "var(--blue)",
        textAlign: "right",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "3",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center"
    }
}

// This function takes in an destructures the current page state and the function for handling a page change
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header id="navbar" style={styles.staticHeader}>
        <h2 className="header main-header">Phoenix Staley - Sviluppatrice</h2>
        <h2 className="header short-header">Phoenix Staley</h2>
        <nav className="text-right navigation">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    // This ternary operator applies the "active" class only when the current page is Home
                    // The ternary operators for the following <li> elements do the same thing
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                    Su Di Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                    Progetti
                    </a>
                </li>
                <li>
                    <a href={resume}>Curriculum Vitae</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default NavTabs;