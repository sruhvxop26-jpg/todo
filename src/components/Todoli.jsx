import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Todoli.css";

const Todoli = () => {
  const [list, setlist] = useState([]);
  const [confirmid, setconfirmid] = useState(null);
  const todoContainer = useRef(null);
  const prevlength = useRef(0);

  // inserting an empty object in the array
  // Date.now() is being used to assign a unique value to each todolist
  const addtodo = () => {
    setlist([...list, { id: Date.now(), text: "" }]);
  };

  const updatetodo = (id, text) => {
    setlist(
      list.map((item) => (item.id === id ? { ...item, text: text } : item))
    );
  };

  const deletetodo = (id) => {
    const todoEL = todoContainer.current.querySelector(
      `.todo[data-id="${id}"]`
    );

    if (!todoEL) return;

    gsap.to(todoEL, {
      y: -20,
      duration: 0.2,
      opacity: 1,
      ease: "power3.in",
      scale: 1,

      onComplete: () => {
        setlist((prev) => prev.filter((item) => item.id !== id));
        setconfirmid(null);
      },
    });
  };

  //TODO ADD ANIMATION
  useGSAP(
    // ANIMATION FUNCTION
    () => {
      if (list.length < prevlength.current) {
        prevlength.current = list.length;
        return;
      }

      if (list.length > prevlength.current) {
        gsap.from(".todo:last-child", {
          y: 20,
          opacity: 0,
          scale: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
        });
      }

      prevlength.current = list.length;
    },

    // DEPENDENCIES
    {
      scope: todoContainer,
      dependencies: [list.length],
    }
  );

  //TODO DELETE CONFIRMATION BOX ANIMATION
  useGSAP(
    () => {
      gsap.from(".confirm-box", {
        y: 20,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
      });
    },
    {
      scope: todoContainer,
      dependencies: [confirmid],
    }
  );

  // DEL ICON ANIMATION
  const OnEnterRotateDelIcon = (e) => {
    const el = e.currentTarget;
    const tl = gsap.timeline();

    gsap.killTweensOf(el);

    tl.to(el, {
      rotate: 180,
      duration: 1,
      ease: "power3.out",
    });
  };
  const OnLeaveRotateDelIcon = (e) => {
    const el = e.currentTarget;
    const tl = gsap.timeline();

    gsap.killTweensOf(el);

    tl.to(el, {
      rotate: 0,
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    <div className="main" ref={todoContainer}>
      <div className="lists">
        {list.map((item) => (
          <div className="todo" data-id={item.id} key={item.id}>
            {/* DELETE ICON*/}
            <div className="head">
              <FontAwesomeIcon
                icon={faXmark}
                className="del-icon"
                onMouseOver={(e) => OnEnterRotateDelIcon(e)}
                onMouseLeave={(e) => OnLeaveRotateDelIcon(e)}
                onClick={() => setconfirmid(item.id)}
              />
            </div>
            {confirmid === item.id && (
              <div className="confirm-box">
                <span>Delete this TODO?</span>
                <div className="btn">
                  <button
                    onClick={() => deletetodo(item.id)}
                    className="yes-btn"
                  >
                    yes
                  </button>
                  <button onClick={() => setconfirmid(null)} className="no-btn">
                    no
                  </button>
                </div>
              </div>
            )}
            <div className="chest">
              <input
                type="text"
                value={item.text}
                placeholder="Enter a task"
                onChange={(e) => updatetodo(item.id, e.target.value)}
              />
            </div>
            <div className="checkbox-wrapper-24">
              <input type="checkbox" id={`check-${item.id}`} name={`check-${item.id}`} value="" />
              <label htmlFor={`check-${item.id}`}>
                <span></span>
              </label>
            </div>
          </div>
        ))}
      </div>
      <button onClick={addtodo} className="button-78">
        ADD NEW TODO
      </button>
    </div>
  );
};

export default Todoli;
