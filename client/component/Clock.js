import { ScrollView, TouchableOpacity, StyleSheet, Text, View } from "react-native"
import React, { useState, useRef, useEffect } from 'react';

const Clock = ({clockRef}) => {

    const [Visible, setVisible] = useState(false);
    const [minuteRotation, setminuteRotation] = useState('0deg');
    const [text, settext] = useState('Clock')
    const [selected, setselected] = useState('')
    const selectedRef = useRef('');
    const [hourRotation, sethourRotation] = useState('90deg');
    const [clockTime, setclockTime] = useState(0);
    const hour = useRef(10);
    const minute = useRef(12);

   useEffect(()=>{
      clockRef.current=text;
   
   },[text,clockTime])


    function updateClock(time) {
        setclockTime(time)
        settext(time)
        setselected('')
        //time+`${selectedRef.current}`
        const [hourHand, minuteHand] = time.split(":");
        hour.current = parseInt(hourHand.trim()) * 30;
        minute.current = parseInt(minuteHand.trim()) * 30;



        sethourRotation(`${hour.current}deg`)
        setminuteRotation(`${minute.current}deg`)





    }


    return (
        <>
            <TouchableOpacity


                style={styles.clock}
                onPress={() => setVisible(Visible ? false : true)}
            >
                <Text style={styles.clockText}> {text} </Text>


            </TouchableOpacity>

            <View style={{
                display: Visible ? 'flex' : 'none', height: 300, justifyContent: "center", alignContent: "center", borderColor: 'gray',
                borderWidth: 1, borderRadius: 10,
            }}>

                <View style={{ flexDirection: 'row', flex: 1, }}>


                    <View style={styles.clockUi}>
                        <View style={[styles.minuteHand, { transform: [{ rotate: minuteRotation }] }]} />
                        <View style={[styles.hourHand, { transform: [{ rotate: hourRotation }] }]} />
                        <View style={styles.amPmcontainer}>

                            <TouchableOpacity
                                onPress={() => {
                                    selectedRef.current = 'am';
                                    setselected('am');
                                    settext((time) =>
                                        time.includes('am') || time.includes('pm')
                                            ? time.replace(/\s?(am|pm)/, ' am')
                                            : time + ' am'
                                    );
                                }}
                            >
                                <Text style={selected == 'am' ? styles.selected : styles.defaultStyle}>am</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                selectedRef.current = 'pm',
                                    setselected('pm'),
                                    settext((time) => {
                                        const baseTime = time.replace(/\s?(am|pm)/, '').trim();
                                        return `${baseTime} ${selectedRef.current}`;
                                    })
                            }} >
                                <Text style={selected == 'pm' ? styles.selected : styles.defaultStyle}>
                                    pm
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <ScrollView style={styles.dailer}>
                        {[
                            '12 : 00 ', '12 : 30 ',
                            '1 : 00 ', '1 : 30 ',
                            '2 : 00 ', '2 : 30 ',
                            '3 : 00 ', '3 : 30 ',
                            '4 : 00 ', '4 : 30 ',
                            '5 : 00 ', '5 : 30 ',
                            '6 : 00 ', '6 : 30 ',
                            '7 : 00 ', '7 : 30 ',
                            '8 : 00 ', '8 : 30 ',
                            '9 : 00 ', '9 : 30 ',
                            '10 : 00 ', '10 : 30 ',
                            '11 : 00 ', '11 : 30 '
                        ].map((time, index) => (
                            <TouchableOpacity key={index} onPress={() => updateClock(time)}>
                                <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', paddingVertical: 10 }}>
                                    {time}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                </View>
            </View >





        </>


    )


}
const styles = StyleSheet.create({
    clock: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,

        textAlignVertical: 'top',
        backgroundColor: '#1e1e1e',
        borderRadius: 10,

    },
    clockText: {
        color: 'white',
    },
    clockUi: {
        height: 190,
        width: 200,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'gray',
        top: 50,
        marginLeft: '5%'

    },
    dailer: {
        height: 300,
        width: 170,
        borderWidth: 1,
        borderColor: 'gray',


        marginLeft: 35
    },
    amPmcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 130,
        bottom: -70,
        backgroundColor: '#2a2a2a',
        padding: 10,
        borderRadius: 10,
        width: '70%',
        alignSelf: 'center',
        height: 40
    },

    minuteHand: {
        position: 'absolute',
        width: 2,
        height: 90,
        backgroundColor: 'white',
        top: 10,
        left: 99,
        transform: [{ rotate: '0deg' }],
        borderRadius: 2,
        transformOrigin: 'bottom center',
    },
    hourHand: {
        position: 'absolute',
        width: 4,
        height: 50,
        backgroundColor: 'white',
        top: 50,
        left: 98,
        transform: [{ rotate: '0deg' }],
        borderRadius: 2,
        transformOrigin: 'bottom center',
    },
    defaultStyle: {
        fontSize: 10,
        color: 'black',
        padding: 2,
        textTransform: 'uppercase',
        backgroundColor: '#444',
        borderRadius: 10,
        width: 40,
        textAlign: 'center'

    },

    selected: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 2,
        textTransform: 'uppercase',
        backgroundColor: 'purple',
        borderRadius: 10,
        width: 40,
        textAlign: 'center'

    },
    selectedButton: {
        backgroundColor: 'purple'
    }


})
export default Clock;