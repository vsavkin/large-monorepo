import { render } from '@testing-library/react';

import ImportantComponent72 from './important-component-72';

describe('ImportantComponent72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent72 />);
    expect(baseElement).toBeTruthy();
  });
});
