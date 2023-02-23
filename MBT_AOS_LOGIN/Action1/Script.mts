AIUtil.SetContext Browser("creationtime:=0")
AIUtil("profile").Click
AIUtil("input", "Username").Type "dominikg"
AIUtil.FindTextBlock("Password").Click
AIUtil("input", "Password").Type "Password1"
AIUtil.FindTextBlock("SIGN IN").Click

