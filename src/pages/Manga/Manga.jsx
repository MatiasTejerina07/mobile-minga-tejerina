import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import InputCustom from '../../components/Auth/InputCustom';
import axios from 'axios';
import { apiUrl } from '../../utils/api';
import { useSelector } from 'react-redux';
import MangaDetails from './MangaDetails';
import { useNavigation } from '@react-navigation/native';

export default function Manga() {
    const token = useSelector(store => store.user.token);
    const [mangas, setMangas] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [filterChapter, setFilterChapter] = useState('');
    const navigate = useNavigation()

    useEffect(() => {
        setLoading(true);
        let headers = { 'Authorization': `Bearer ${token}` };
        axios.get(apiUrl + `mangas?page=${page}`, { headers })
            .then(res => {
                if (res.data.mangas.length > 0) {
                    setMangas(prevMangas => [...prevMangas, ...res.data.mangas]);
                    setPage(prevPage => prevPage + 1);
                } else {
                    setHasMore(false);
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [page, token]);

    const handleSearch = (value) => {
        setFilterChapter(value.toLowerCase());
    };
    const mangadetails = ()=>{
        navigate.navigate('MangaDetails')
    }

    const filteredMangas = mangas.filter(manga => manga.title.toLowerCase().includes(filterChapter));

    const renderItem = ({ item }) => (
        <View key={item._id} className='bg-[#EBEBEB] flex justify-center items-center w-[100%] h-56  rounded-t-3xl'>
            <TouchableOpacity onPress={mangadetails} className="w-5/6 h-5/6 flex flex-row bg-white shadow rounded-lg justify-between items-center lg:w-1/3 overflow-hidden">
                <View className="h-2/3 w-[5px]" style={{ backgroundColor: item?.category_id?.color }} />
                <View className="flex flex-col items-start justify-center h-full grow p-4">
                    <View>
                        <Text className="font-roboto font-[600] text-[17px] text-[#222222] w-[90px]">{item?.title}</Text>
                        <Text style={{ color: item?.category_id?.color, fontSize: 18 }}>{item.category_id.name}</Text>
                        <Text style={{ backgroundColor: item?.category_id?.hover, textAlign: 'center', borderRadius: 20, marginTop: 5, fontWeight: 800 }}>READ</Text>
                    </View>
                </View>
                <Image source={{ uri: item.cover_photo }} /* source={item.cover_photo} */ className="mr-[-50px] h-[300px] w-[200px] sm:w-[250px] object-cover rounded-full" />
            </TouchableOpacity>
        </View>
    );

    const renderFooter = () => {
        if (!loading) return null;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <ActivityIndicator size="small" color="#999999" />
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: '40%' }}>
                <ImageBackground style={{ height: '100%', width: '100%', objectFit: 'cover', alignItems: 'center', justifyContent: 'center' }} source={{ uri: 'https://github.com/cartolanofacundo/minga_azul_front/blob/main/src/assets/images/Wallpaper-manga-mobile.png?raw=true' }}>
                    <Text style={{ color: 'white', fontSize: 38 }}>Mangas</Text>
                    <InputCustom value={filterChapter} handleValue={handleSearch} icon={'card-search'} />
                </ImageBackground>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={filteredMangas}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    contentContainerStyle={{ flexGrow: 1 }}
                    ListFooterComponent={renderFooter}
                    onEndReached={() => {
                        if (!loading && hasMore) {
                            setLoading(true);
                        }
                    }}
                    onEndReachedThreshold={0.1}
                />
            </View>
        </View>
    );
}
