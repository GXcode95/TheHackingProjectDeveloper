class PhotosController < ApplicationController
  
  def create 
    @post = Post.find(params[:post_id])
    @post.photo.attach(params[:photo])
    
    redirect_to root_path
  end 

  def destroy
    @photo = Post.find(params[:post_id]).photo
    @photo.destroy
    flash[:success] = 'Photo was successfully deleted.'
    redirect_to galleries_path

  end

end
