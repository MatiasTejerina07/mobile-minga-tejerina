import { View, Image, Text, Pressable } from "react-native"
import { useState } from "react";
import ToggleButtom from './ToggleButtom'
export default function MangaDetails() {
  const [isManga, setIsManga] = useState(true);
  const [showChapters, setShowChapters] = useState('')
  const handleToggleSwitch = () => {
    setIsManga(!isManga);
  }
  return (
    <View className='h-full w-full'>
      <View className='flex justify-center h-[50%] items-center w-full'>
        <Image className='w-5/6 h-40' source={{ uri: 'https://www.mundodeportivo.com/alfabeta/hero/2021/01/como-ver-manga-dragon-ball-online.jpg?width=768&aspect_ratio=16:9&format=nowebp' }} />
        <Text className='font-[500] text-[38px]'>Naruto: And That's Why You're Disqualified!! #8</Text>
      </View>
      <View className=''>
        <Text className='text-[12px] text-[#f9e2e2]  bg-[#EF8481] w-16 ml-4 pt-[6px] text-center rounded-full h-8 font-[500]'>Shonen</Text>
      </View>
      <View className=' w-full flex-row justify-center gap-4 mt-2'>
        <Image className='w-16 h-16 rounded-full' source={{ uri: 'https://as2.ftcdn.net/v2/jpg/05/80/41/37/1000_F_580413710_GWEvISwXugHPfC1V1w1sYuI9Adj9RBij.jpg' }} />
        <Image className='w-16 h-16 rounded-full' source={{ uri: 'https://cdn.com.do/wp-content/uploads/2017/03/dbb421b5-no-me-gusta.jpg' }} />
        <Image className='w-16 h-16 rounded-full' source={{ uri: 'https://w7.pngwing.com/pngs/106/526/png-transparent-wow-emoji-world-of-warcraft-emoji-emoticon-facebook-emoji-smiley-snout-circle-thumbnail.png' }} />
        <Image className='w-16 h-16 rounded-full' source={{ uri: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/5URXKL6Q5NECRPGIOB66AE75A4.jpg' }} />
      </View>
      <View className='flex flex-row justify-evenly mt-4 items-start '>
        <View className='flex justify-center items-center'>
          <Text>4.5/5</Text>
          <Text>Rating</Text>
        </View>
        <View className='flex justify-center items-center'>
          <Text>265</Text>
          <Text>Chapters</Text>
        </View>
        <View className='flex justify-center items-center'>
          <Text>Eng</Text>
          <Text>Languaje</Text>
        </View>
      </View>
      <View className="w-full h-[40px] my-6 border-slate-200 border-[1px] rounded-full overflow-hidden flex flex-row justify-center items-center">
        <Pressable onPress={() => setShowChapters(false)} className="w-1/2 h-full flex flex-col justify-center items-center rounded-full" style={{ backgroundColor: !showChapters ? "#F97316" : "transparent" }}>
          <Text className="font-medium" style={{ color: !showChapters ? "#ffffff" : "#94a3b8" }}>Manga</Text>
        </Pressable>
        <Pressable onPress={() => setShowChapters(true)} className="w-1/2 h-full flex flex-col rounded-full justify-center items-center" style={{ backgroundColor: showChapters ? "#F97316" : "transparent" }}>
          <Text className="font-medium" style={{ color: showChapters ? "#ffffff" : "#94a3b8" }}>Chapters</Text>
        </Pressable>
      </View>

    </View>
  )
}
