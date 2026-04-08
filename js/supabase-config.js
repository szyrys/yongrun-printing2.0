// Supabase 配置
const SUPABASE_URL = 'https://jeiyolxdsznnojezmfbl.supabase.coo';
const PUBLISHABLE_KEY = 'sb_publishable_E1r_3smcOC2oe90ApKutIg_AkmROLi0y';

// 不声明新变量，直接挂载到 window 对象上
if (!window.supabaseClient) {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, PUBLISHABLE_KEY);
}
