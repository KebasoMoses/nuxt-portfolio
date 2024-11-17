<template>
  <!-- <div class="prose dark:prose-invert max-w-none">
      <ContentDoc path="/" />
    </div> -->
  <div>
    <div class="grid grid-cols-1 grid-rows-[0.3fr_0.6fr_0.6fr_0.8fr]">
      <div class="p-4 flex justify-center shadow-lg rounded-md">
        <div class="p-6 flex flex-col items-center">
          <div class="m-3">
            <img src="https://avatars.githubusercontent.com/u/98042989?v=4" alt="kebaso-profile" height="80px"
              width="80px" class="rounded-full">
          </div>
          <div>
            <h1 class="font-bold text-black dark:text-white font-mono text-2xl">Kebaso Moses</h1>
            <p class="text-gray-400 text-wrap text-justify">Web Developer, Software Tester, Graphic Designer, Photographer, SEO Expert</p>
          </div>
          <hr>
        </div>
        <div class="flex space-x-6">
          <Icon name="grommet-icons:github" class="hover:cursor-pointer"/>
          <Icon name="grommet-icons:pinterest" class="hover:cursor-pointer"/>
          <Icon name="grommet-icons:twitter" class="hover:cursor-pointer"/>
          <Icon name="grommet-icons:mail-option" class="hover:cursor-pointer"/>
        </div>
      </div>
      <div class="p-4 mt-6 shadow-lg rounded-md">
        <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-6 sm:space-y-4">
          <div class="text-wrap">
            <h1 class="text-2xl font-mono font-bold pb-3">About</h1>
            <p >
              Hello! I am Kebaso Moses. Web Developer, Software Tester, Graphic Designer, SEO expert and Photographer.
            </p>
            <br>
            <p>
              22 Year Old Freelancer, Experienced in all mentioned Skills.
            </p>
          </div>
          <div class="text-wrap">
            <h1 class="text-2xl font-mono font-bold pb-3">Basic Information</h1>
            <table>
              <tr>
                <td class="font-bold pr-12 font-mono text-lg">Age:</td>
                <td>22</td>
              </tr>
              <tr>
                <td class="font-bold pr-12 font-mono text-lg">Location:</td>
                <td>Nairobi, Kenya</td>
              </tr>
              <tr>
                <td class="font-bold pr-12 font-mono text-lg">Email:</td>
                <td>moseskebaso4@gmail.com</td>
              </tr>
              <tr>
                <td class="font-bold pr-12 font-mono text-lg">Mobile:</td>
                <td>+254702376223</td>
              </tr>
              <tr>
                <td class="font-bold pr-12 font-mono text-lg">Location:</td>
                <td>Nakuru, Kenya</td>
              </tr>
              <tr>
                <td class="font-bold pr-12 font-mono text-lg">Language:</td>
                <td>English, French(Intermediate), Germany (Beginner) Kiswahili</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="p-4 mt-6 shadow-lg rounded-md">
        <h1 class="flex justify-center text-2xl font-mono font-bold mb-6">Professional Skills</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-6 space-y-6 md:space-y-0">
          <div class="space-y-4">
            <div class="flex justify-between">
              <p>JavaScript</p>
              <p>90%</p>
            </div>
            <div class="h-2 bg-green-200 rounded-full">
              <div class="h-full bg-green-500 rounded-full" style="width: 90%"></div>
            </div>
            <div class="flex justify-between">
              <p>Python</p>
              <p>90%</p>
            </div>
            <div class="h-2 bg-green-200 rounded-full">
              <div class="h-full bg-green-500 rounded-full" style="width: 90%"></div>
            </div>
            <div class="flex justify-between">
              <p>MongoDB</p>
              <p>80%</p>
            </div>
            <div class="h-2 bg-green-200 rounded-full">
              <div class="h-full bg-green-500 rounded-full" style="width: 80%"></div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex justify-between">
              <p>Graphic Design</p>
              <p>70%</p>
            </div>
            <div class="h-2 bg-green-200 rounded-full">
              <div class="h-full bg-green-500 rounded-full" style="width: 70%"></div>
            </div>
            <div class="flex justify-between">
              <p>SEO Expert</p>
              <p>60%</p>
            </div>
            <div class="h-2 bg-green-200 rounded-full">
              <div class="h-full bg-green-500 rounded-full" style="width: 60%"></div>
            </div>
            <div class="flex justify-between">
              <p>Photography</p>
              <p>50%</p>
            </div>
            <div class="h-2 bg-green-200 rounded-full">
              <div class="h-full bg-green-500 rounded-full" style="width: 50%"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Work Experience -->
      <div class="p-4 mt-6 shadow-lg rounded-md">
        <h1 class="flex justify-center text-2xl font-mono font-bold mb-6">Work Experience</h1>
        <div class="grid grid-rows-4 space-y-4">
          <div class="shadow-lg rounded-md">
            <div class="grid grid-cols-[1fr_3fr]">
              <div class="flex flex-col items-center bg-green-300 dark:bg-green-800  p-3">
                <h4>JUNE 2024 - PRESENT</h4>
                <br>
                <p>UTEST</p>
              </div>
              <div class="bg-white text-black text-center p-3">
                <h3 class="font-mono font-bold flex flex-start">JUNE 2024 - Subject Matter Expert</h3>
                <p class="text-slate-600 flex flex-start">Building Data annotation platforms using JavaScript and Python</p>
              </div>
            </div>
          </div>
          <div class="shadow-lg rounded-md"> 
            <div class="grid grid-cols-[1fr_3fr]">
              <div class="flex flex-col items-center bg-green-300 dark:bg-green-800 p-3">
                <h4>JUNE 2023 - JUNE 2024</h4>
                <br>
                <p>UTEST</p>
              </div>
              <div class="bg-white text-black text-center p-3">
                <h3 class="font-mono font-bold flex flex-start">JUNE 2024 - Test Engineer 1</h3>
                <p class="text-slate-600 flex flex-start">Setting up cycles and guiding software testers to deliver projects.</p>
              </div>
            </div>
          </div>
          <div class="shadow-lg rounded-md"> 
            <div class="grid grid-cols-[1fr_3fr]">
              <div class="flex flex-col items-center bg-green-300 dark:bg-green-800 p-3">
                <h4>DEC 2021 - JUNE 2023</h4>
                <br>
                <p>UTEST</p>
              </div>
              <div class="bg-white text-black text-center p-3">
                <h3 class="font-mono font-bold flex flex-start">JUNE 2024 - Test Team Lead</h3>
                <p class="text-slate-600 flex flex-start">Joined uTest as a Tester mainly helping in Functional testing projects.</p>
              </div>
            </div>
          </div>
          <div class="shadow-lg rounded-md">
            <div class="grid grid-cols-[1fr_3fr]">
              <div class="flex flex-col items-center bg-green-300 dark:bg-green-800 p-3">
                <h4>JULY 2020 - DEC 2021</h4>
                <br>
                <p>UTEST</p>
              </div>
              <div class="bg-white text-black text-center p-3">
                <h3 class="font-mono font-bold flex flex-start">JUNE 2024 - SOFTWARE TESTER</h3>
                <p class="text-slate-600 flex flex-start">Joined uTest as a Freelance Tester mainly helping in Functional testing cycles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Kebaso Moses',
  description: 'This is kebaso moses personal page',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://kebaso-moses.netlify.app/images/To%20post.jpg'
    }
  ]
})
</script>