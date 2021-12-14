import { render } from '@testing-library/react';

import Icon160 from './icon160';

describe('Icon160', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon160 />);
    expect(baseElement).toBeTruthy();
  });
});
