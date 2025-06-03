import React from 'react';
import styled from 'styled-components';

const Button = () => {
    return (
        <StyledWrapper>
            <button className="button">
                <div className="button-box">
                    <span className="button-elem">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 12h14M13 5l7 7-7 7"
                                stroke="black"
                                strokeWidth="1.5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <span className="button-elem">
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M5 12h14M13 5l7 7-7 7"
                                stroke="black"
                                strokeWidth="1.5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            </button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .button {
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
    margin: 0;
    overflow: hidden;
    outline: none;
    background-color: white; /* Full white circle */
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }

  .button:before,
  .button:after {
    display: none;
  }

  .button-box {
    display: flex;
    position: absolute;
    top: 2px;
    right: 0px;
  }

  .button-elem {
    display: block;
    width: 20px;
    height: 20px;
    margin: 10px 10px 0 10px;
  }

  .button:hover .button-box,
  .button:focus .button-box {
    transition: 0.4s;
    transform: translateX(42px); /* Arrow entrance/exit */
  }
`;

export default Button;
