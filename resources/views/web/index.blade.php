@extends('layout')
@section('content')
    <div class="banner">
        <div class="vnt-slide-home">
            <img data-lazy="{{ asset('public/web/images/banner/banner.png') }}" alt="" class="slick-slider">
        </div>
        <div class="vnt-slide-home">
            <img data-lazy="{{ asset('public/web/images/banner/banner_1.png') }}" alt="" class="slick-slider">
        </div>
        <div class="vnt-slide-home">
            <img data-lazy="{{ asset('public/web/images/banner/banner_2.png') }}" alt="" class="slick-slider">
        </div>
        <div class="vnt-slide-home">
            <img data-lazy="{{ asset('public/web/images/banner/banner_3.png') }}" alt="" class="slick-slider">
        </div>
        <div class="vnt-slide-home">
            <img data-lazy="{{ asset('public/web/images/banner/banner_4.png') }}" alt="" class="slick-slider">
        </div>
    </div>
@endsection
