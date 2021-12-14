import { render } from '@testing-library/react';

import Icon100 from './icon100';

describe('Icon100', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon100 />);
    expect(baseElement).toBeTruthy();
  });
});
