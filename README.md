1. 收集更新猫猫照片
2. 注册用户才能发布猫猫照片
3. 猫猫照片分类功能 ,品种, 标签(玩耍,眺望)
4. 拍摄功能,支持自动识别猫品种 ( 第一版不需要实现)

数据结构

user {
id,
username,
password,
lastLoginTime,
lastip
}

photo{
id,
title,
userid,
type,
tag,
url,
addtime
like,
status
}

