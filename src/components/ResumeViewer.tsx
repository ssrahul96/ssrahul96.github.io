import React from "react";
import { Helmet } from "react-helmet";

const ResumeViewer: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Resume | Rahul Somasundaram</title>
                <link rel="canonical" href="https://ssrahul96.xyz/resume" />
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimal-ui"
                />
                <meta
                    name="keywords"
                    content="ssrahul96, Rahul Somasundaram, DevOps Engineer, Software Engineer, Open Source Contributor"
                />
                <meta
                    name="description"
                    content="Rahul Somasundaram is a collaborative developer and cloud engineer focused on scalable, cloud-native solutions and modern tech innovation."
                />

                {/* Favicons */}
                <link rel="icon" href="/assets/img/favicon.png" />
                <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

                {/* Open Graph Meta Tags */}
                <meta property="og:url" content="https://ssrahul96.xyz/resume" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Resume | Rahul Somasundaram" />
                <meta
                    property="og:description"
                    content="Rahul Somasundaram is a collaborative developer and cloud engineer focused on scalable, cloud-native solutions and modern tech innovation."
                />
                <meta property="og:image" content="https://ssrahul96.xyz/og.png" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="ssrahul96.xyz" />
                <meta property="twitter:url" content="https://ssrahul96.xyz/resume" />
                <meta name="twitter:title" content="Resume | Rahul Somasundaram" />
                <meta
                    name="twitter:description"
                    content="Rahul Somasundaram is a collaborative developer and cloud engineer focused on scalable, cloud-native solutions and modern tech innovation."
                />
                <meta name="twitter:image" content="https://ssrahul96.xyz/og.png" />
            </Helmet>

            <h1 style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
                Resume | Rahul Somasundaram
            </h1>

            <div style={{ margin: 0, height: "100vh", overflow: "hidden" }}>
                <iframe
                    title="rahul_resume_devops"
                    src="https://mozilla.github.io/pdf.js/web/viewer.html?file=https://ssrahul96.xyz/assets/docs/rahul_resume_devops.pdf"
                    style={{ width: "100%", height: "100%", border: "none" }}
                    allowFullScreen
                />
            </div>
        </>
    );
};

export default ResumeViewer;
