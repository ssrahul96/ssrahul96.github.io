import React from "react";
import { Helmet } from "react-helmet";

const ResumeViewer: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Resume | Rahul Somasundaram</title>
            </Helmet>

            <h1 className="sr-only">
                Resume | Rahul Somasundaram
            </h1>

            <div className="m-0 h-screen overflow-hidden">
                <iframe
                    title="rahul_resume_devops"
                    src="https://mozilla.github.io/pdf.js/web/viewer.html?file=https://ssrahul96.me/assets/docs/rahul_resume_devops.pdf"
                    className="h-full w-full border-0"
                    allowFullScreen
                />
            </div>
        </>
    );
};

export default ResumeViewer;
