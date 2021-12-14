import { render } from '@testing-library/react';

import Icon174 from './icon174';

describe('Icon174', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon174 />);
    expect(baseElement).toBeTruthy();
  });
});
