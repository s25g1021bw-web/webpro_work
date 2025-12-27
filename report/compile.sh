#!/bin/bash

# 処理するメインのファイル名（拡張子なし）。必要に応じて変更してください。
FILENAME="main"
TEX_FILE="${FILENAME}.tex"
AUX_FILE="${FILENAME}.aux"
DVI_FILE="${FILENAME}.dvi"
PDF_FILE="${FILENAME}.pdf"

# 拡張子が .tex のファイルが存在するか確認
if [ ! -f "${TEX_FILE}" ]; then
    echo "エラー: メインのファイル (${TEX_FILE}) が見つかりません。"
    exit 1
fi

echo "--- 1. pLaTeX 実行 (AUXファイル生成) ---"
platex "${TEX_FILE}" || { echo "❌ pLaTeX 1回目失敗"; exit 1; }

echo "--- 3. pLaTeX 実行 (BBLファイル組み込み) ---"
# 生成された .bbl を組み込む
platex "${TEX_FILE}" || { echo "❌ pLaTeX 2回目失敗"; exit 1; }

echo "--- 5. DVIファイルをPDFに変換 ---"
# dvipdfmx で DVI から PDF を作成
dvipdfmx "${DVI_FILE}" || { echo "❌ PDF変換失敗"; exit 1; }

echo "--- 6. 中間ファイルのクリーンアップ ---"
# 不要なファイルを削除
rm -f "${FILENAME}.aux" "${FILENAME}.log" "${FILENAME}.bbl" "${FILENAME}.blg" "${FILENAME}.dvi" "${FILENAME}.toc" "${FILENAME}.lof" "${FILENAME}.lot"

echo "✅ すべての処理が完了しました: ${PDF_FILE}"