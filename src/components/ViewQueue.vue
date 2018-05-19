<template>
<div v-title="'号单详情'" class='view-box'>
    <div class='status'>
        <yd-icon size='.4rem' color='#16aa6b' name="checkoff"></yd-icon> 已取号
    </div>
    <div class="order">
        <h1>A310</h1>
    </div>
    <div class="button">
        <yd-button size="large" type="primary">取消排号</yd-button>
    </div>
    </div>
</template>
<style scoped>
.view-box {
    width: 100%;
}
.order {
    width: 50%;
    margin: auto;
    padding: .8rem 0;
    background-color: #ffffff;
    border: 1px solid #dedede;
    border-radius: 6px;
}
.order h1 {
    font-size: .4rem;
}
.button {
    padding: .6rem .4rem;
}
.view-box .status {
    text-align: left;
    padding: .6rem .4rem .8rem .4rem;
    background-color: #ffffff;
    border-bottom: 1px solid #dedede;
    margin-bottom: .8rem;
}
</style>
