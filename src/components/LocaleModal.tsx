import * as React from 'react';
import {Modal, Portal, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';
import CommonStyle from '../theme/CommonStyle';
import Button from './Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../state/store';
import {toggleLocaleModal, setCountry} from '../state/reducers/locale.slice';
import DropDownPicker from './DropDownPicker';
import {useEffect, useState} from 'react';
import useLanguage from '../hooks/useLanguage';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const LocaleModal = () => {
  const dispatch = useDispatch();
  const {isLocaleModalVisible, countries, country} = useSelector(
    (state: RootState) => state.locale,
  );
  const {language, languages, setLanguage} = useLanguage();

  const [sCountry, setSCountry] = useState<{
    title: string | undefined;
    value: string | undefined;
  }>({
    title: '',
    value: '',
  });
  const [sLanguage, setSLanguage] = useState<{
    title: string | undefined;
    value: string | undefined;
  }>({
    title: '',
    value: '',
  });

  useEffect(() => {
    const selected = countries.find(item => item.value === country);
    setSCountry({title: selected?.title, value: selected?.value});
  }, [countries, country]);

  useEffect(() => {
    const selected = languages.find(item => item.value === language);
    setSLanguage({title: selected?.title, value: selected?.value});
  }, [languages, language]);
  const hideModal = () => dispatch(toggleLocaleModal(false));

  const changeLanguage = (lang: any) => {
    const selected = languages.find(item => item.value === lang.value);
    setSLanguage({title: selected?.title, value: selected?.value});
    setLanguage(lang.value);
  };
  const changeCountry = (cnt: any) => {
    const selected = countries.find(item => item.value === cnt.value);
    setSCountry({title: selected?.title, value: selected?.value});
    dispatch(setCountry(cnt?.value));
  };

  const onSave = () => {
    changeLanguage(sLanguage);
    changeCountry(sCountry);
    hideModal();
  };

  return (
    <Portal>
      <Modal
        visible={isLocaleModalVisible}
        onDismiss={hideModal}
        style={styles.modalStyle}
        contentContainerStyle={styles.centeredView}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Set Locale</Text>
          <Button
            onPress={() => hideModal()}
            btnTextStyle={styles.btnTextStyle}
            btnText={'Close'}
            style={styles.btnStyle}
          />
        </View>
        <View style={styles.cardBody}>
          <View style={styles.section}>
            <DropDownPicker
              items={countries}
              placeholder={'Select Country'}
              selected={sCountry}
              setSelected={setSCountry}
            />
          </View>
          <View style={styles.section}>
            <DropDownPicker
              items={languages}
              placeholder={'Select Language'}
              selected={sLanguage}
              setSelected={setSLanguage}
            />
          </View>
          <View style={CommonStyle.center}>
            <Button
              onPress={() => onSave()}
              btnTextStyle={styles.actionBtnStyleText}
              btnText={'Save'}
              style={[styles.actionBtnStyle, styles.btnSuccess]}
            />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 12,
  },
  modalStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  centeredView: {
    width: widthPercentageToDP('90%'),
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
  },
  cardHeader: {
    width: '100%',
    height: 55,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.borderColor,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 16,
    color: Colors.darkText,
  },
  btnStyle: {
    width: 90,
    height: 35,
    borderRadius: 4,
    ...CommonStyle.center,
    backgroundColor: Colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
  },
  btnTextStyle: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 13,
    color: Colors.darkText,
  },

  actionBtnStyle: {
    width: 200,
    height: 45,
    borderRadius: 4,
    ...CommonStyle.center,
    backgroundColor: Colors.btnPrimary,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    marginVertical: 4,
  },
  actionBtnStyleText: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 13,
    color: Colors.white,
  },
  cardBody: {
    width: '100%',
    padding: 20,
  },
  btnSuccess: {
    backgroundColor: Colors.success,
  },
});
export default LocaleModal;
