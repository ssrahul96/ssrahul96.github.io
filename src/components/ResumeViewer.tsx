import React from "react";
import { Helmet } from "react-helmet";

const ResumeViewer: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Resume | Rahul Somasundaram</title>
            </Helmet>

            <h1 style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
                Resume | Rahul Somasundaram
            </h1>

            <div style={{ margin: 0, height: "100vh", overflow: "hidden" }}>
                <iframe
                    title="rahul_resume_devops"
                    src="https://mozilla.github.io/pdf.js/web/viewer.html?file=https://ssrahul96.me/assets/docs/rahul_resume_devops.pdf"
                    style={{ width: "100%", height: "100%", border: "none" }}
                    allowFullScreen
                />
            </div>
        </>
    );
};

export default ResumeViewer;
