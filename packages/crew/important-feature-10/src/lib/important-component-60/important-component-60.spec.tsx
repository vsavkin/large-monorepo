import { render } from '@testing-library/react';

import ImportantComponent60 from './important-component-60';

describe('ImportantComponent60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent60 />);
    expect(baseElement).toBeTruthy();
  });
});
