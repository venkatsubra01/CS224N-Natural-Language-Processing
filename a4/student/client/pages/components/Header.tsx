import React, { useEffect, useState } from 'react'


export default function Header() {
    return (
    <div className="space-y-2">
        <h1 className="text-8xl text-center">Translate <span className="text-[#948979]">Mandarin</span> to <span className="text-[#DFD0B8]">English</span></h1>
        <h2 className="text-2xl text-center mx-40">No <span className="text-red-500">APIs</span>. Just using an in-house Seq2Seq model <span className="text-[#077A7D]">built</span>, <span className="text-[#7AE2CF]">pretrained</span>, <span className="text-[#9ACBD0]">fine-tuned</span> and <span className="text-[#A5BFCC]">tested</span> to translate Mandarin characters to English. Check out <a href="https://github.com/venkatsubra01/CS224N-Natural-Language-Processing/tree/main/a4" className="text-blue-500 hover:underline">my repository</a> for further details.</h2>
    </div>
    )
}