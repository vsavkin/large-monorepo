import { render } from '@testing-library/react';

import Icon41 from './icon41';

describe('Icon41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon41 />);
    expect(baseElement).toBeTruthy();
  });
});
