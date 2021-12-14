import { render } from '@testing-library/react';

import ImportantComponent228 from './important-component-228';

describe('ImportantComponent228', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent228 />);
    expect(baseElement).toBeTruthy();
  });
});
