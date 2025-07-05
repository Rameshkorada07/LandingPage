
import React from 'react';

const AITools = () => {
  return (
    <section className="ai-tools">
      <div className="container">
        <div className="ai-tools-grid">
          <div className="ai-tool-card">
            <div className="tool-visual">
              <div className="resume-preview">
                <div className="resume-header"></div>
                <div className="resume-content">
                  <div className="resume-line"></div>
                  <div className="resume-line short"></div>
                  <div className="resume-line"></div>
                  <div className="resume-line medium"></div>
                </div>
              </div>
            </div>
            <div className="tool-content">
              <h3 className="tool-title">AI-Powered Resume Builder</h3>
              <p className="tool-description">
                Create professional resumes that stand out. Our AI analyzes job descriptions 
                and optimizes your resume for maximum impact.
              </p>
              <button className="btn-outline">Try Resume Builder</button>
            </div>
          </div>

          <div className="ai-tool-card reverse">
            <div className="tool-content">
              <h3 className="tool-title">AI Interview Coach to Master Your Skills</h3>
              <p className="tool-description">
                Practice with our AI interview coach. Get personalized feedback and 
                improve your interview performance with realistic scenarios.
              </p>
              <button className="btn-outline">Start Practice</button>
            </div>
            <div className="tool-visual">
              <div className="interview-preview">
                <div className="video-placeholder">
                  <div className="play-button">▶</div>
                </div>
                <div className="interview-controls">
                  <div className="control-btn"></div>
                  <div className="control-btn"></div>
                  <div className="control-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;
