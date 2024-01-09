var Q = JSON.parse($response.body);
Q.Data.BenefitButtonList = [];//福利中心
Q.Data.FunctionButtonList = [];//我发布的
Q.Data.BottomButtonList = [];//帮助与客服
$done({body : JSON.stringify(Q)});