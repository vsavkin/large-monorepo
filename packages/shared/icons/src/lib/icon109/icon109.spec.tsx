import { render } from '@testing-library/react';

import Icon109 from './icon109';

describe('Icon109', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon109 />);
    expect(baseElement).toBeTruthy();
  });
});
