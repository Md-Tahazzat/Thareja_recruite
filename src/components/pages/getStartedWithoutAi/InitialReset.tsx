"use client";
import { resetJobPost } from "@/redux/features/jobpost/jobPostSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const InitialReset = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetJobPost("RESET"));
  }, []);

  return <></>;
};

export default InitialReset;
