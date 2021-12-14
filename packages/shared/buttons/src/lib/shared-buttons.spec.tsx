import { render } from '@testing-library/react';

import SharedButtons from './shared-buttons';

describe('SharedButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedButtons />);
    expect(baseElement).toBeTruthy();
  });
});
