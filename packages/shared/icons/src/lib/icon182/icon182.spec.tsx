import { render } from '@testing-library/react';

import Icon182 from './icon182';

describe('Icon182', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon182 />);
    expect(baseElement).toBeTruthy();
  });
});
