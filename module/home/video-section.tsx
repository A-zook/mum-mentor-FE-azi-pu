"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { VIDEO_URL } from "@/data/constants";

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="w-full bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[750px] flex-col items-center gap-4"
        >
          <h2 className="lg:text-heading2 text-secondary-text text-center text-3xl leading-tight font-bold md:text-4xl">
            Why Thousands of Mothers
            <br />
            Are Joining <span className="text-primary">Nora</span>
          </h2>
          <p className="text-secondary-text text-center text-lg leading-relaxed md:text-xl lg:text-2xl">
            Discover how Nora is transforming motherhood—one conversation at a
            time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-5xl"
        >
          <div className="group relative aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster="/assets/images/video-thumbnail.png"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              muted={isMuted}
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Controls */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                onClick={togglePlay}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform hover:scale-110"
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 fill-pink-600 text-pink-600" />
                ) : (
                  <Play className="ml-1 h-8 w-8 fill-pink-600 text-pink-600" />
                )}
              </button>
            </div>

            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/90"
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
