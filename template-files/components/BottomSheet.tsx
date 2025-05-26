import React, { forwardRef, memo, useImperativeHandle, useRef } from "react";
import { StyleSheet } from "react-native";

import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { colors } from "../constants";

export type BottomSheetModalHandle = {
  open: () => void;
  close: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const BottomSheet = forwardRef<BottomSheetModalHandle, Props>(
  ({ children }, ref) => {
    const modalRef = useRef<BottomSheetModal>(null);

    useImperativeHandle(ref, () => ({
      open: () => modalRef.current?.present(),
      close: () => modalRef.current?.dismiss(),
    }));

    return (
      <BottomSheetModal
        ref={modalRef}
        backdropComponent={Backdrop}
        enableDynamicSizing
        backgroundStyle={styles.sheet}
      >
        <BottomSheetView style={styles.content}>{children}</BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    padding: 20,
    flex: 1,
    paddingBottom: 36,
  },
});

const Backdrop = memo(({ style, ...otherProps }: BottomSheetBackdropProps) => {
  return (
    <BottomSheetBackdrop
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      opacity={1}
      {...otherProps}
      style={[style, { backgroundColor: "rgba(0, 0, 0, 0.3)" }]}
    />
  );
});
