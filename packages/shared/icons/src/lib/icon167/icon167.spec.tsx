import { render } from '@testing-library/react';

import Icon167 from './icon167';

describe('Icon167', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon167 />);
    expect(baseElement).toBeTruthy();
  });
});
