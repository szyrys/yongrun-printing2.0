// Supabase 配置
// 请将下面的值替换成您自己的 Supabase 项目信息

const SUPABASE_URL = 'https://jeiyolxdsznnojezmfbl.supabase.co';
const PUBLISHABLE_KEY = 'sb_publishable_E1r_3smcOC2oe90ApKutIg_AkmROLi0';

// 初始化 Supabase 客户端
const supabase = window.supabase.createClient(SUPABASE_URL, PUBLISHABLE_KEY);