import { render } from '@testing-library/react';

import ImportantComponent12 from './important-component-12';

describe('ImportantComponent12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent12 />);
    expect(baseElement).toBeTruthy();
  });
});
