import { render } from '@testing-library/react';

import Icon96 from './icon96';

describe('Icon96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon96 />);
    expect(baseElement).toBeTruthy();
  });
});
