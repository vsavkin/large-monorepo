import { render } from '@testing-library/react';

import Icon91 from './icon91';

describe('Icon91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon91 />);
    expect(baseElement).toBeTruthy();
  });
});
