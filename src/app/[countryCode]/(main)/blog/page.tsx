"use client"

import React, { Component, use } from "react"
import Image from "next/image"
import Link from "next/link"
import Blog_bg_image from "@/components/blog_bg_image"
import Blog_contex from "@/components/blog_contex"

export default class page extends Component {
  render() {
    return (
      <div className="bg-[#f7f5f2]">
        <Blog_bg_image />
        <Blog_contex />
      </div>
    )
  }
}
