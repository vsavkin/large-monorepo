import { render } from '@testing-library/react';

import Icon9 from './icon9';

describe('Icon9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon9 />);
    expect(baseElement).toBeTruthy();
  });
});
