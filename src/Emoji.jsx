import React from 'react';
import FacebookEmoji from "react-facebook-emoji";

function Emoji(props) {
  return (
    <div className="extraEmoji">
            <React.Fragment>
              <button>
                <FacebookEmoji type="like" size="sm" />
              </button>
              <button>
                <FacebookEmoji type="love" size="sm" />{" "}
              </button>
              <button>
                <FacebookEmoji type="haha" size="sm" />{" "}
              </button>
              <button>
                <FacebookEmoji type="sad" size="sm" />
              </button>
              <button>
                <FacebookEmoji type="wow" size="sm" />
              </button>

              <button>
                <FacebookEmoji type="angry" size="sm" />
              </button>
            </React.Fragment>
          </div>
  )
}

export default Emoji