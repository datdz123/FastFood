// import { View, Text } from 'react-native'
// import React from 'react'
// import Modal from 'react-native-modal';
// export default function Login() {
//     const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
//     const toggleBottomSheet = () => {
//       setBottomSheetVisible(!isBottomSheetVisible);
//     };
//   return (
//     <View>
//       <TouchableOpacity onPress={toggleBottomSheet}>
//         <Text>Show Bottom Sheet</Text>
//       </TouchableOpacity>

//       <Modal isVisible={isBottomSheetVisible}>
//         <View>
//           <Text>
//             Yêu cầu đăng nhập
//           </Text>
//           <Text>
//             Vui lòng đăng nhập để sử dụng tính năng của ứng dụng
//           </Text>
//           {/* Thêm nội dung khác của bottom sheet ở đây */}
//           <TouchableOpacity onPress={toggleBottomSheet}>
//             <Text>Đóng</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   )
// }