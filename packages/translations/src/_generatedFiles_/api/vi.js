export default {
  authentication: {
    account: 'Tài khoản',
    apiKey: 'API Key',
    enableAPIKey: 'Kích hoạt API Key',
    loggedInChangePassword: 'Để đổi mật khẩu, hãy truy cập cài đặt <0>tài khoản</0>.',
    newAccountCreated:
      'Một tài khoản mới đã được tạo cho bạn. Tài khoản này được dùng để truy cập <a href="{{serverURL}}">{{serverURL}}</a> Hãy nhấp chuột hoặc sao chép đường dẫn sau vào trình duyệt của bạn để xác thực email: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Sau khi email được xác thực, bạn sẽ có thể đăng nhập.',
    resetYourPassword: 'Tạo lại mật khẩu',
    verified: 'Đã xác thực',
    verifyYourEmail: 'Tiến hành xác thực email',
    youAreReceivingResetPassword:
      'Bạn nhận được tin nhắn này vì bạn (hoặc một người nào khác) đã gửi yêu cầu thay đổi mật khẩu tài khoản của bạn. Xin hãy nhấp chuột vào đường dẫn sau, hoặc sao chép vào trình duyệt của bạn để hoàn tất quá trình:',
    youDidNotRequestPassword:
      'Nếu bạn không phải là người yêu cầu thay đổi mật khẩu, xin hãy bỏ qua tin nhắn này và mật khẩu của bạn sẽ được giữ nguyên.',
  },
  error: {
    deletingFile: 'Lỗi - Đã xảy ra vấn đề khi xóa tệp này.',
    emailOrPasswordIncorrect: 'Lỗi - Email hoặc mật khẩu không chính xác.',
    followingFieldsInvalid_one: 'Lỗi - Field sau không hợp lệ:',
    followingFieldsInvalid_other: 'Lỗi - Những fields sau không hợp lệ:',
    noFilesUploaded: 'Lỗi - File chưa được tải lên.',
    notAllowedToPerformAction: 'Lỗi - Bạn không có quyền thực hiện lệnh này.',
    problemUploadingFile: 'Lỗi - Đã xảy ra vấn để khi tải lên file sau.',
    unableToDeleteCount: 'Không thể xóa {{count}} trong số {{total}} {{label}}.',
    unableToUpdateCount: 'Không thể cập nhật {{count}} trên {{total}} {{label}}.',
    unauthorized: 'Lỗi - Bạn cần phải đăng nhập trước khi gửi request sau.',
    userLocked: 'Lỗi- Tài khoản đã bị khóa do đăng nhập thất bại nhiều lần.',
    valueMustBeUnique: 'Lỗi - Giá trị không được trùng lặp.',
  },
  fields: {
    chooseBetweenCustomTextOrDocument:
      'Chọn giữa nhập URL văn bản tùy chỉnh hoặc liên kết đến tài liệu khác.',
    chooseDocumentToLink: 'Chọn một tài liệu để liên kết đến',
    customURL: 'URL tùy chỉnh',
    enterURL: 'Nhập một URL',
    internalLink: 'Liên kết nội bộ',
    linkType: 'Loại liên kết',
    openInNewTab: 'Mở trong trang mới',
    textToDisplay: 'Văn bản để hiển thị',
  },
  general: {
    copy: 'Sao chép',
    createdAt: 'Ngày tạo',
    deletedCountSuccessfully: 'Đã xóa thành công {{count}} {{label}}.',
    deletedSuccessfully: 'Đã xoá thành công.',
    email: 'Email',
    notFound: 'Không tìm thấy',
    row: 'Hàng',
    rows: 'Những hàng',
    successfullyCreated: '{{label}} đã được tạo thành công.',
    successfullyDuplicated: '{{label}} đã được sao chép thành công.',
    thisLanguage: 'Vietnamese (Tiếng Việt)',
    updatedAt: 'Ngày cập nhật',
    updatedCountSuccessfully: 'Đã cập nhật thành công {{count}} {{label}}.',
    updatedSuccessfully: 'Cập nhật thành công.',
    user: 'Người dùng',
    users: 'Người dùng',
    value: 'Giá trị',
  },
  upload: {
    fileName: 'Tên file',
    fileSize: 'Dung lượng file',
    height: 'Chiều cao',
    sizes: 'Các độ phân giải',
    width: 'Chiều rộng',
  },
  validation: {
    emailAddress: 'Địa chỉ email không hợp lệ.',
    enterNumber: 'Vui lòng nhập số.',
    greaterThanMax: '{{value}} lớn hơn giá trị tối đa cho phép của {{label}} là {{max}}.',
    invalidInput: 'Dữ liệu nhập vào không hợp lệ.',
    invalidSelection: 'Lựa chọn ở field này không hợp lệ.',
    invalidSelections: "'Field này có những lựa chọn không hợp lệ sau:'",
    lessThanMin: '{{value}} nhỏ hơn giá trị tối thiểu cho phép của {{label}} là {{min}}.',
    longerThanMin: 'Giá trị này cần có độ dài tối thiểu {{minLength}} ký tự.',
    notValidDate: '"{{value}}" không phải là một ngày (date) hợp lệ.',
    required: 'Field này cần được diền.',
    requiresAtLeast: 'Field này cần tối thiểu {{count}} {{label}}.',
    requiresNoMoreThan: 'Field này không thể vượt quá {{count}} {{label}}.',
    requiresTwoNumbers: 'Field này cần tối thiểu 2 chữ số.',
    shorterThanMax: 'Giá trị phải ngắn hơn hoặc bằng {{maxLength}} ký tự.',
    trueOrFalse: 'Field này chỉ có thể chứa giá trị true hoặc false.',
    validUploadID: "'Field này không chứa ID tải lên hợp lệ.'",
  },
  version: {
    autosavedSuccessfully: 'Đã tự động lưu thành công.',
    draft: 'Bản nháp',
    draftSavedSuccessfully: 'Bản nháp đã được lưu thành công.',
    published: 'Đã xuất bản',
    restoredSuccessfully: 'Đã khôi phục thành công.',
    status: 'Trạng thái',
  },
}
