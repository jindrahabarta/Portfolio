import Japan2 from '@/../public/images/japan2.jpeg'
import JapanBg from '@/../public/images/japanesebg.jpg'
import helenpottery_cover from '@/../../public/videos/helenpottery_cover.mp4'

//FIXME: Databáze všech projektů
//      1. images
//      2. projectName
//      3. použité Tags - pole tagů {text: string, color:string}
//      4. hl tech pro filter - wp, next, cms
//      5. highlighted

const projects = [
    {
        name: 'Project1',
        img: Japan2,
        tags: [
            { text: 'tag1-1', color: 'red' },
            { text: 'tag1-2', color: 'blue' },
        ],
        tech: 'next',
        main,
    },
    {
        name: 'Project1',
        img: Japan2,
        tags: [
            { text: 'tag2-1', color: 'red' },
            { text: 'tag2-2', color: 'blue' },
        ],
        tech: 'wp',
    },
]

export default projects
