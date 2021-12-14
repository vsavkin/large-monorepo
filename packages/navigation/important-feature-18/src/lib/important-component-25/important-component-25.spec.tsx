import { render } from '@testing-library/react';

import ImportantComponent25 from './important-component-25';

describe('ImportantComponent25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent25 />);
    expect(baseElement).toBeTruthy();
  });
});
